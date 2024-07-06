import * as React from 'react'

const startTime = Date.now();

const WebGLShader = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    React.useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }
        const gl = canvas.getContext('webgl');
        if(!gl){
            return;
        }
        const vertexShaderSource = `
        attribute vec2 position;
        
        void main() {
            gl_Position = vec4(position, 0, 1);
        }
        `;
        const fragmentShaderSource = `
        precision mediump float;

        uniform float u_time;
        uniform vec2 u_resolution;

        float random (in vec2 _st) {
            return fract(sin(dot(_st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        float noise (in vec2 _st) {
            vec2 i = floor(_st);
            vec2 f = fract(_st);

            float a = random(i);
            float b = random(i + vec2(1.0, 0.0));
            float c = random(i + vec2(0.0, 1.0));
            float d = random(i + vec2(1.0, 1.0));

            vec2 u = f * f * (3.0 - 2.0 * f);

            return mix(a, b, u.x) +
                    (c - a)* u.y * (1.0 - u.x) +
                    (d - b) * u.x * u.y;
        }

        float fbm ( in vec2 _st) {
            float v = 0.0;
            float a = 0.5;
            vec2 shift = vec2(100.0);
            mat2 rot = mat2(cos(0.5), sin(0.5),
                            -sin(0.5), cos(0.50));
            for (int i = 0; i < 5; ++i) {
                v += a * noise(_st);
                _st = rot * _st * 2.0 + shift;
                a *= 0.5;
            }
            return v;
        }

        void main(){
            vec2 st = gl_FragCoord.xy / u_resolution.xy * 25.0;
            vec3 color = vec3(0.0);

            vec2 q = vec2(0.);
            q.x = fbm( st + 0.00*u_time);
            q.y = fbm( st + vec2(1.0));

            vec2 r = vec2(0.);
            r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time );
            r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);

            float f = fbm(st+r);

            vec3 rose600 = vec3(0.6235294117647059, 0.07058823529411765, 0.2235294117647059);
            vec3 rose800 = vec3(0.8823529411764706, 0.11372549019607843, 0.2823529411764706);

            color = mix(vec3(0.5, 1.0, 1.5) * 5.0,
                        rose800,
                        clamp((f*f)*4.0,0.0,1.0));

            color = mix(color,
                        rose600 * 2.0,
                        clamp(length(q),0.0,1.0));

            color = mix(color,
                        vec3(2.0, 1.0, 1.0) / 100.0,
                        clamp(length(r.x),0.0,1.0));
            
            color = color * 0.6;

            vec2 uv = gl_FragCoord.xy / u_resolution.xy;
            uv *= 1.0 - uv.yx;
            float vig = uv.x * uv.y * 15.0;
            vig = pow(vig, 1.25);

            gl_FragColor = vec4((f*f*f*f+.6*f*f+.5*f)*color * vig, 1.0);
        }
        `;
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        if(!vertexShader){
            return;
        }
        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.compileShader(vertexShader);
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        if(!fragmentShader){
            return;
        }
        gl.shaderSource(fragmentShader, fragmentShaderSource);
        gl.compileShader(fragmentShader);
        const shaderProgram = gl.createProgram();
        if(!shaderProgram){
            return;
        }
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);
        gl.useProgram(shaderProgram);
        const positionAttribute = gl.getAttribLocation(shaderProgram, 'position');
        gl.enableVertexAttribArray(positionAttribute);
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = [
          -1, -1,
          -1, 1,
          1, -1,
          1, 1,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
        gl.vertexAttribPointer(positionAttribute, 2, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        const resolutionUniformLocation = gl.getUniformLocation(shaderProgram, 'u_resolution');
        gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);

        const timeUniformLocation = gl.getUniformLocation(shaderProgram, 'u_time');


        const resizeCanvas = () =>{
            if(canvas) {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
                gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
                gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
            }
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function renderFrame() {
            const elapsedTime = (Date.now() - startTime) / 1000;
            gl?.uniform1f(timeUniformLocation, elapsedTime);
            gl?.clearColor(0.0, 0.0, 0.0, 1.0);
            gl?.clear(gl.COLOR_BUFFER_BIT);
            gl?.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(renderFrame);
        }

        renderFrame();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);
    return (
    <canvas ref={canvasRef} className='w-full h-full fixed -z-50'/>
    );
}

export default WebGLShader