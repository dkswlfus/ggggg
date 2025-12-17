// 모달 열기 함수
function showDetails(title, hanja, meaning) {
    const modal = document.getElementById('modal');
    
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-hanja').innerText = hanja;
    document.getElementById('modal-meaning').innerText = meaning;
    
    modal.style.display = 'flex';
}

// 모달 닫기 함수
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// 창 바깥 클릭 시 닫기 (CSS에서 이미 처리했지만 보조용)
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}