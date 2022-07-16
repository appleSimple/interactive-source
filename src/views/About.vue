<template>
  <canvas id="glCanvas" width="500" height="500">
    Your browser doesn't appear to support the HTML5
    <code>&lt;canvas&gt;</code> element.
  </canvas>
</template>

<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";

let gl: any; // WebGL 객체
let shaderProgram: any; // 쉐이더 프로그램
let vertexPositionAttribute: any; // 수직
let gl_FragColor: any;

onMounted(() => {
  loadCanvas();
  initShaders();
});

const loadCanvas = (): void => {
  const glCanvas = document.getElementById("glCanvas");

  gl = initWebGL(glCanvas);

  if (gl) {
    // 투명한 색상의 캔버스를 black으로 변경
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // 깊이 테스트
    gl.enable(gl.DEPTH_TEST);

    // 가까운 물체를 떨어져 있는 물체를 가리는 것
    gl.depthFunc(gl.LEQUAL);

    // clear th color as well as depth buffer
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }
};

/** 컨텍스트 초기화 */
const initWebGL = (canvas: any): HTMLElement => {
  gl = null;

  try {
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  } catch (e) {
    console.log(e);
  }

  // welGL을 지원하지 않을 경우
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser may not support it.");
  }

  gl = null;

  return gl;
};

/** 쉐이더 초기화 */
const initShaders = (): void => {
  // 조각 쉐이더 - id : shader-fs
  let fragmentShader = getShader(gl, "shader-fs");
  // 정점 쉐이더 - id : shader-vs
  let vertexShader = getShader(gl, "shader-vs");

  // 쉐이더 프로그램 생성
  shaderProgram = gl.createProgram();
  // 생성한 2개의 쉐이더를 붙인다.
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  // 2개의 쉐이더를 연결한다.
  gl.linkProgram(shaderProgram);
  // LINK_STATUS 확인
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert("Unable to initialize the shader program.");
  }

  gl.useProgram(shaderProgram);

  // getAttribLocation() : 프로그램 위치 반환
  vertexPositionAttribute = gl.getAttribLocation(
    shaderProgram,
    "aVertexPosition"
  );
  gl.enableVertexAttribArray(vertexPositionAttribute);
};

/** 쉐이더 불러오기 */
const getShader = (gl: any, id: string): any => {
  let shaderScript: any, theSource, currentChild, shader;

  shaderScript = document.getElementById(id);

  if (!shaderScript) {
    return null;
  }

  theSource = "";
  currentChild = shaderScript.firstChild;

  while (currentChild) {
    // 특정 id를 가진 텍스트 컨텐츠를 theSource에 재할당
    if (currentChild.nodeType === currentChild.TEXT_NODE) {
      theSource += currentChild.textContent;
    }

    currentChild = currentChild.nextSibling;
  }

  if (shaderScript.type === "x-shader/x-fragment") {
    shader = gl.createShader(gl.FRAGMENT_SHADER);
  } else if (shaderScript.type === "x-shader/x-vertex") {
    shader = gl.createShader(gl.VERTEX_SHADER);
  } else {
    return null;
  }

  gl.shaderSource(shader, theSource);

  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      "An error occured compiling the shader: " + gl.getShaderInfoLog(shader)
    );

    return null;
  }

  return shader;
};
</script>

<style lang="scss" scoped>
canvas {
  border: 2px solid black;
  background-color: black;
}
video {
  display: none;
}
</style>
