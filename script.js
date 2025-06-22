async function loadModels() {
  await faceapi.nets.tinyFaceDetector.loadFromUri('/models')
}
document.addEventListener("DOMContentLoaded", loadModels);

document.getElementById('imageUpload').addEventListener('change', async function () {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '얼굴 분석 중...';

  // 간단한 분석 결과 출력 (테스트용)
  setTimeout(() => {
    resultDiv.innerHTML = `
      <h2>분석 결과</h2>
      <p>테스토스테론: 63%</p>
      <p>에스트로겐: 37%</p>
    `;
  }, 1000);
});