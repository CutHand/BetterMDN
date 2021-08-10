/**
 * 与许多其他重要组件一样，后台脚本必须在清单中注册。
 * 在清单中注册后台脚本告诉扩展要引用哪个文件，
 * 以及该文件的行为方式。
 * 
 */

let fixTable = true

// 一个后台侦听器，在扩展被安装时调用
// chrome.storage允许多个扩展组件访问和更新
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({fixTable})
    
})