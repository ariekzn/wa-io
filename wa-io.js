       (function () {
        var options = {
            whatsapp: &quot;+6281219220752&quot;, // WhatsApp number
            email: &quot;office@suryareadymix.com&quot;, // Email
            sms: &quot;+6281219220752&quot;, // Sms phone number
            call: &quot;+6281219220752&quot;, // Call phone number
            company_logo_url: &quot;//2.bp.blogspot.com/-q8oRFlhQeo4/WmiWt5Q9SGI/AAAAAAAAAd4/Dw1Zjvc7vdwLA1THD2cLSygUO3fFGdc7ACLcBGAs/s320/logo%2Bp.png&quot;, // URL of company logo (png, jpg, gif)
            greeting_message: &quot;Hallo, ada yang bisa kami bantu? Silahkan tinggalkan pesan sekarang.&quot;, // Text of greeting message
            call_to_action: &quot;Hubungi Kami&quot;, // Call to action
            button_color: &quot;#129BF4&quot;, // Color of button
            position: &quot;right&quot;, // Position may be &#39;right&#39; or &#39;left&#39;
            order: &quot;whatsapp,call,sms,email&quot; // Order of buttons
        };
        var proto = document.location.protocol, host = &quot;whatshelp.io&quot;, url = proto + &quot;//static.&quot; + host;
        var s = document.createElement(&#39;script&#39;); s.type = &#39;text/javascript&#39;; s.async = true; s.src = url + &#39;/widget-send-button/js/init.js&#39;;
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName(&#39;script&#39;)[0]; x.parentNode.insertBefore(s, x);
    })();
