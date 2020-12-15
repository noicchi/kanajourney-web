Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
width = width || 186;
var color1 = this.hpGaugeColor1();
var color2 = this.hpGaugeColor2();
this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
this.changeTextColor(this.systemColor());
this.drawText(TextManager.hpA, x, y, 44);
};
Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
width = width || 186;
var color1 = this.mpGaugeColor1();
var color2 = this.mpGaugeColor2();
this.drawGauge(x, y, width, actor.mpRate(), color1, color2);
this.changeTextColor(this.systemColor());
this.drawText(TextManager.mpA, x, y, 44);
};