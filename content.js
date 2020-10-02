(function() {
    const title_match = /Cloudflare Access/;
    const title = document.querySelector('head title');

    if (!title || !title.innerText.trim().match(title_match)) {
        console.debug('Failed to match title');
        return
    }

    const btn = document.querySelector('button[value="approve"]');
    if (typeof(btn) != 'undefined' && btn != null) {
        btn.click();
    }

    const status = document.querySelector('body .Surface .Success h2');
    if (!status || status.innerText.trim() != "Success!") {
        console.debug('Approval failed');
        return
    }

    chrome.runtime.sendMessage({"close": true});
})();

// vim: et
