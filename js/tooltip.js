const tolltips = document.querySelectorAll('.tooltip');

tolltips.forEach((tolltip) => {
    tolltip.addEventListener('mouseover', onTolltipMouseover)
    tolltip.addEventListener('mouseleave', onTolltipMouseleave)
});
function onTolltipMouseleave (evt) {
    evt.currentTarget.classList.toggle('tooltip-animated')
}
function onTolltipMouseover (evt) {
    evt.currentTarget.classList.toggle('tooltip-animated')
}

