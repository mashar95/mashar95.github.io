const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.Bullet,
		C3.Behaviors.LOS,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Plugins.TiledBg,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Behaviors.destroy,
		C3.Behaviors.Tween,
		C3.Behaviors.solid,
		C3.Behaviors.Turret,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Turret.Acts.AddTarget,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Cnds.PickTopBottom,
		C3.Plugins.Sprite.Acts.ZMoveToObject,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetAnimSpeed,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.RotateClockwise,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Mouse.Cnds.IsButtonDown,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Behaviors.LOS.Acts.CastRay,
		C3.Behaviors.LOS.Cnds.RayIntersected,
		C3.Behaviors.LOS.Exps.HitX,
		C3.Behaviors.LOS.Exps.HitY,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Cnds.ForEachOrdered,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.System.Cnds.ForEach,
		C3.Behaviors.Turret.Acts.SetRateOfFire,
		C3.Behaviors.Turret.Cnds.OnShoot,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Exps.PickedCount,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Acts.SetAnimFrame
	];
};
self.C3_JsPropNameTable = [
	{hp: 0},
	{direction: 0},
	{time: 0},
	{shootspeed: 0},
	{kamikaze: 0},
	{fireworks: 0},
	{"8Direction": 0},
	{flybomber: 0},
	{flyer: 0},
	{flyingelephant: 0},
	{headhummer: 0},
	{slither: 0},
	{walkingslither: 0},
	{krot: 0},
	{machinegun: 0},
	{damage: 0},
	{bullet1: 0},
	{Bullet: 0},
	{enemybullet: 0},
	{bullet25: 0},
	{bullet50: 0},
	{Laser: 0},
	{LineOfSight: 0},
	{guns: 0},
	{Touch: 0},
	{Text: 0},
	{toxic: 0},
	{bunker: 0},
	{TiledBackground: 0},
	{ground: 0},
	{ScrollTo: 0},
	{camera: 0},
	{airdirection: 0},
	{point: 0},
	{buttons: 0},
	{gunschoose: 0},
	{Keyboard: 0},
	{TiledBackground3: 0},
	{Sprite: 0},
	{Text2: 0},
	{toxicbomb: 0},
	{level: 0},
	{blocks: 0},
	{Text3: 0},
	{Text4: 0},
	{Text5: 0},
	{hpweight: 0},
	{interfacesprites: 0},
	{Audio: 0},
	{Explosion: 0},
	{Mouse: 0},
	{destroyanimation: 0},
	{fireworkbull: 0},
	{DestroyOutsideLayout: 0},
	{Tween: 0},
	{Solid: 0},
	{Turret: 0},
	{enemyes: 0},
	{Bullet2: 0},
	{bunkerbull: 0},
	{enemysbull: 0},
	{gunsvariable: 0},
	{gunangle: 0},
	{gunanglespeed: 0},
	{toxicspeed: 0},
	{waves: 0},
	{mobs: 0},
	{firstplay: 0},
	{wavestimer: 0},
	{nextleveltime: 0},
	{wavespause: 0},
	{startX: 0},
	{startY: 0},
	{targetX: 0},
	{targetY: 0},
	{craftspeed: 0},
	{craftstrenght: 0}
];

self.InstanceType = {
	kamikaze: class extends self.ISpriteInstance {},
	fireworks: class extends self.ISpriteInstance {},
	flybomber: class extends self.ISpriteInstance {},
	flyer: class extends self.ISpriteInstance {},
	flyingelephant: class extends self.ISpriteInstance {},
	headhummer: class extends self.ISpriteInstance {},
	slither: class extends self.ISpriteInstance {},
	walkingslither: class extends self.ISpriteInstance {},
	krot: class extends self.ISpriteInstance {},
	machinegun: class extends self.ISpriteInstance {},
	bullet1: class extends self.ISpriteInstance {},
	enemybullet: class extends self.ISpriteInstance {},
	bullet25: class extends self.ISpriteInstance {},
	bullet50: class extends self.ISpriteInstance {},
	Laser: class extends self.ISpriteInstance {},
	guns: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	bunker: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	ground: class extends self.ITiledBackgroundInstance {},
	camera: class extends self.ISpriteInstance {},
	point: class extends self.ISpriteInstance {},
	buttons: class extends self.ISpriteInstance {},
	gunschoose: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	toxicbomb: class extends self.ISpriteInstance {},
	blocks: class extends self.ISpriteInstance {},
	Text3: class extends self.ITextInstance {},
	Text4: class extends self.ITextInstance {},
	Text5: class extends self.ITextInstance {},
	interfacesprites: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Explosion: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	destroyanimation: class extends self.ISpriteInstance {},
	fireworkbull: class extends self.ISpriteInstance {},
	enemyes: class extends self.ISpriteInstance {},
	bunkerbull: class extends self.ISpriteInstance {},
	enemysbull: class extends self.ISpriteInstance {}
}