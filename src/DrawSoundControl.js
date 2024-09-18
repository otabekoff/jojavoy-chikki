function drawSoundControl() {
    let soundEnabledText = !soundEnabled ? sounds.disableSounds.enableText : sounds.disableSounds.disableText;
    context.fillStyle = "#242424";
    context.font = "18px Arial";

    context.fillText(soundEnabledText, 490, 35);
    context.restore();
}
