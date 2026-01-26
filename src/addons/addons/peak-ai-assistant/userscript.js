
function openPeak() {
    const win = window.vm.wm.createWindow({
        id: 'ai-peak',
        title: 'Ai Assistant',
        width: 420,
        height: 300,
        x: 80,
        y: 80,
        resizable: true,
        maximizable: true,
        closable: true,
        onClose: () => console.log('example window closed')
    });

    const content = document.createElement('div');
    content.style.padding = '16px';
    content.style.height = "100%";

    const msgs = document.createElement("div");
    msgs.style.position = "absolute";
    msgs.style.left = "0";
    msgs.style.top = "45px";
    msgs.style.right = "0";
    msgs.style.bottom = "50px";
    msgs.style.padding = "10px";
    msgs.style.display = "flex";
    msgs.style.overflow = "auto";
    msgs.style.flexDirection = "column";
    content.appendChild(msgs);

    const user_box = document.createElement("input");
    user_box.style.backgroundColor = "var(--ui-primary)";
    user_box.style.border = "var(--ui-black-transparent) 1px solid";
    user_box.style.position = "absolute";
    user_box.style.left = "10px";
    user_box.style.right = "10px";
    user_box.style.bottom = "10px";
    user_box.style.padding = "10px";
    user_box.style.borderRadius = "10px";
    user_box.style.minHeight = "40px";
    user_box.style.padding = "0px 5px";
    user_box.style.display = "flex";
    user_box.style.fontSize = "15px";
    user_box.style.marginTop = "5px";
    content.appendChild(user_box);

    function addMessage(msg) {
        const container = document.createElement("div");
        container.style.display = "flex";
        if (msg.kind == "usr")
            container.style.justifyContent = "flex-end";

        const elem = document.createElement("div");
        elem.style.padding = "10px";
        elem.style.backgroundColor = "var(--ui-primary)";
        elem.style.border = "var(--ui-black-transparent) 1px solid";
        elem.style.borderRadius = "10px";
        elem.style.display = "flex";
        elem.style.flexDirection = "column";
        elem.style.gap = "10px";
        elem.style.width = "fit-content";
        elem.style.maxWidth = "75%";
        container.appendChild(elem);
        
        for (let i = 0; i < msg.parts.length; i++) {
            const part = msg.parts[i];
            
            if (part.kind == "txt") {
                const txt = document.createElement("p");
                txt.textContent = part.txt;
                txt.style.width = "fit-content";
                txt.style.whiteSpace = "pre";
                txt.style.textWrap = "auto";
                elem.appendChild(txt);
            } else if (part.kind == "img") {
                const img = document.createElement("img");
                img.src = part.url;
                img.style.borderRadius = "5px";
                elem.appendChild(img);
            }
        }

        container.style.marginBottom = "5px";
        msgs.appendChild(container);
    }

    function sendMessage(msg) {
        addMessage({
            kind: "usr",
            parts: [{
                kind: "txt",
                txt: msg
            }]
        });
        if (true) {
            addMessage({
                kind: "ai",
                parts: [{
                    kind: "txt",
                    txt: "you're gay"
                },{
                    kind: "img",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVjwWcucjURU7AiWxIaK5KkqLDSH9zgO9gg&s"
                },{
                    kind: "txt",
                    txt: "^- you"
                }]
            });
        } else {
            addMessage({
                kind: "ai",
                parts: [{
                    kind: "txt",
                    txt: "Hello!\n\nI am an AI language model here to assist you with any questions or tasks you have. How can I help you today?"
                }]
            });
        }
    }
        
    user_box.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && user_box.value.trim() != "") {
            sendMessage(user_box.value);
            user_box.value = "";
        }
    });

    /*
    content.innerHTML = `
        <div id="main-pane">
            <div id="ai-content">

            </div>
            <div id="usr-box">

            </div>
        </div>
    `;
    */

    win.setContent(content);
    win.show();
        
    content.querySelector('#ai-content').style = {
        
    }
}

setTimeout(() => {
    const menubar = document.getElementsByClassName("menubardumbass")[0];
    const button = document.createElement("button");
    button.textContent = "open sigma ai assistant";
    button.style = "color:black";
    button.addEventListener("click", openPeak);
    console.log(button);
    menubar.appendChild(button);
}, 2000);

openPeak();