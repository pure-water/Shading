uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

varying vec4 v_position;
varying vec3 v_normal;
varying vec2 v_texcoord;

uniform sampler2D u_tex01;

void main (void) {

    vec2 st;

    vec2 t_size = vec2((textureSize(u_tex01,0))); //LOD
    int x = int(gl_FragCoord.x)-int(gl_FragCoord.x)/5*5 ; 

    switch(x) {
        case 0 : {
           st = gl_FragCoord.xy/t_size;
           break;
        }

        default : {
           st = vec2(0.5,0.5);
        }

    }
    gl_FragColor = texture2D(u_tex01, st);

}
