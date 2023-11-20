function toggleFilter() {
    const filterContent = document.querySelector('.filter-content');
    const filterBtn = document.querySelector('.filter-btn');
    filterContent.style.display = filterContent.style.display === 'block' ? 'none' : 'block';
    filterBtn.classList.toggle('active');
}