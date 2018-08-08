uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

varying vec4 v_position;
varying vec3 v_normal;
varying vec2 v_texcoord;

uniform sampler2D u_tex01;

void main (void) {
    vec3 color = vec3(1.0);
    vec2 t_size; 

    t_size = vec2((textureSize(u_tex01,0))); //LOD

    vec2 st = vec2(float(gl_FragCoord.x)/t_size.x,float(gl_FragCoord.y)/t_size.y);
    gl_FragColor = texture2D(u_tex01, st);

}
