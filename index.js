async function SayHello() {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            alert('Hello From My Extension!');
        }
    }); 
    
}
document.getElementById('MyButton').addEventListener('click', SayHello);