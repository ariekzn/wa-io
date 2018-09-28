    (function () {
        var options = {
            whatsapp: "+6287741114299", // WhatsApp number
            email: "office@muliareadymix.com", // Email
            sms: "+6287741114299", // Sms phone number
            call: "+6282122929433", // Call phone number
            company_logo_url: "//3.bp.blogspot.com/-NEnCPBo1X1E/W64EI1PUeqI/AAAAAAAAACQ/Iyns_6JYSlIdrfmWXY1oT1Pvsshbt49EgCLcBGAs/s1600/favicon.png", // URL of company logo (png, jpg, gif)
            greeting_message: "Hallo, ada yang bisa kami bantu? Silahkan tinggalkan pesan sekarang.", // Text of greeting message
            call_to_action: "Hubungi Kami", // Call to action
            button_color: "#129BF4", // Color of button
            position: "right", // Position may be 'right' or 'left'
            order: "whatsapp,call,sms,email" // Order of buttons
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
