function onUrlChanged(tabId, changeInfo, tab) {

    chrome.pageAction.setIcon({
        tabId: tabId,
        path: "images/check.png"
    });
    chrome.pageAction.setPopup({
        tabId: tabId,
        popup: 'popup.html#a'
    })
    chrome.pageAction.show(tabId);
}

chrome.tabs.onUpdated.addListener(onUrlChanged);
