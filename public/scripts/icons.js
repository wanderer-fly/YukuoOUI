// Dragable

new Sortable(document.getElementById('dock-list'), {
    // 啟用拖放
    draggable: '.icon',
    // 阻止拖放圖像
    ghostClass: 'ghost',
    // 換位動畫
    animation: 150
});