const tableAside = document.querySelector('.document-toc-container')

const onMounted = () => {
    chrome.storage.sync.get('fixTable',({fixTable}) => {
        if(tableAside && fixTable){
            tableAside.classList.add('fix-table')
        }else if(tableAside && !fixTable){
            tableAside.classList.remove('fix-table')
        }else{
            console.log('CC---Not found the Node. ')
        }
    })
}

onMounted()

chrome.storage.onChanged.addListener((changes,namespace) => {
    // console.log('------------')
    // console.log(changes)
    // console.log('------------')
    // 这个结构赋值加循环绝了👍
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        if(key === 'fixTable') onMounted();
        console.log(
          `Storage key "${key}" in namespace "${namespace}" changed.`,
          `Old value was "${oldValue}", new value is "${newValue}".`
        );
      }
})
