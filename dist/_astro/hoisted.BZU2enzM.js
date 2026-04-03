window.showToast=function(e,o="info",r=4e3,l="top-right"){const i=document.getElementById("toast-container")||a(),s="toast-"+Math.random().toString(36).substr(2,9),n={success:{bg:"bg-emerald-50",text:"text-emerald-900",icon:"text-emerald-600 check_circle",border:"border-emerald-200"},error:{bg:"bg-red-50",text:"text-red-900",icon:"text-red-600 cancel",border:"border-red-200"},warning:{bg:"bg-amber-50",text:"text-amber-900",icon:"text-amber-600 warning",border:"border-amber-200"},info:{bg:"bg-blue-50",text:"text-blue-900",icon:"text-blue-600 info",border:"border-blue-200"}}[o],t=document.createElement("div");t.id=s,t.className=`toast bg-white rounded-xl shadow-lg border flex items-start gap-4 p-4 mb-3
                      max-w-sm animate-slide-in ${n.bg} ${n.border} ${n.text}`,t.role="alert",t.setAttribute("aria-live",o==="error"?"assertive":"polite");const[c,d]=n.icon.split(" ");return t.innerHTML=`
      <span class="material-symbols-outlined ${c} flex-shrink-0 mt-0.5">
        ${d}
      </span>
      <div class="flex-1 text-sm font-medium">${e}</div>
      <button class="flex-shrink-0 hover:opacity-75 transition-opacity focus:outline-none"
              aria-label="Close" onclick="this.closest('.toast').remove()">
        <span class="material-symbols-outlined text-xl">close</span>
      </button>
    `,i.appendChild(t),r>0&&setTimeout(()=>{t.classList.add("animate-slide-out"),setTimeout(()=>t.remove(),300)},r),s};window.showError=function(e,o=5e3){return window.showToast(e,"error",o)};window.showSuccess=function(e,o=3e3){return window.showToast(e,"success",o)};function a(){const e=document.createElement("div");return e.id="toast-container",e.className="fixed z-[9999] pointer-events-none max-w-md",document.body.appendChild(e),e}document.getElementById("toast-container")||a();
