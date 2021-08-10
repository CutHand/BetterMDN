let inpBtn = document.querySelector('#fixTable')
// 初始化状态
chrome.storage.sync.get('fixTable', ({ fixTable }) => {
    inpBtn.checked = fixTable
})
// 开启事件
inpBtn.addEventListener('click',async (event) => {
    console.log(event)
    chrome.storage.sync.set({'fixTable':event.target.checked})
    let [tab] = await chrome.tabs.query({active:true,currentWindow:true})
    // 编程式注入
    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        function: fixTableAction
    })
})

function fixTableAction(){
    chrome.storage.sync.get('fixTable',({fixTable}) => {
        const tableAside = document.querySelector('.document-toc-container')
        if(tableAside && fixTable){
            tableAside.classList.add('fix-table')
        }else if(tableAside && !fixTable){
            tableAside.classList.remove('fix-table')
        }else{
            console.log('CC---Not found the Node. ')
        }
    })
}
