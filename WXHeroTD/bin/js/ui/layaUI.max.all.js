var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.moveBox=null;
		    this.centerBox=null;
		    this.t_score=null;
		    this.s_hero=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);

		}

		GameUI.uiView={"type":"View","props":{"width":720,"height":1280,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"width":814,"height":1556,"centerY":0,"centerX":0},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":814,"lineWidth":1,"height":1556,"fillColor":"#f4ff00"}}]},{"type":"Box","props":{"width":814,"var":"moveBox","mouseEnabled":true,"height":1556,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"game/beijing.jpg"}},{"type":"Box","props":{"y":685,"x":360,"width":264,"visible":false,"var":"centerBox","height":264,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Sprite","props":{"y":132,"x":132,"width":0,"height":0},"child":[{"type":"Circle","props":{"y":0,"x":0,"radius":150,"lineWidth":1,"fillColor":"#ff0000"}}]}]},{"type":"Text","props":{"y":251,"x":408,"width":552,"var":"t_score","text":"0","pivotY":40,"pivotX":277,"height":76,"font":"shuzi","align":"center"}}]},{"type":"Sprite","props":{"y":963,"x":361,"width":112,"visible":false,"var":"s_hero","pivotY":55,"pivotX":55,"height":110},"child":[{"type":"Animation","props":{"y":56,"x":50,"width":385,"source":"hero/gailun-01.png","pivotY":155,"pivotX":180,"height":294,"autoPlay":true}}]}]};
		return GameUI;
	})(View);
var GameOverUI=(function(_super){
		function GameOverUI(){
			
		    this.img_highScore=null;
		    this.t_score=null;
		    this.t_highScore=null;
		    this.t_title=null;
		    this.btn_playAgain=null;
		    this.btn_shared=null;
		    this.btn_rank=null;
		    this.list_rank=null;

			GameOverUI.__super.call(this);
		}

		CLASS$(GameOverUI,'ui.GameOverUI',_super);
		var __proto__=GameOverUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOverUI.uiView);

		}

		GameOverUI.uiView={"type":"View","props":{"width":720,"height":1280,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"width":814,"height":1556,"centerY":0,"centerX":0},"child":[{"type":"Sprite","props":{"y":-3,"x":0,"alpha":0.9},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":814,"lineWidth":1,"height":1556,"fillColor":"#050505"}}]},{"type":"Image","props":{"y":196,"x":255,"var":"img_highScore","skin":"game/zuigaofen.png"}},{"type":"Text","props":{"y":441,"x":224,"text":"当前得分:","fontSize":35,"font":"SimHei","color":"#ffffff"}},{"type":"Text","props":{"y":441,"x":404,"width":216,"var":"t_score","text":"9999999","height":40,"fontSize":35,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":320,"x":131,"width":552,"var":"t_highScore","text":"0","height":101,"font":"shuzi","align":"center"}},{"type":"Image","props":{"y":517,"x":165,"skin":"game/huodechenghao-di.png"}},{"type":"Text","props":{"y":528,"x":271,"text":"获得称号:","fontSize":35,"font":"SimHei","color":"#eacd83"}},{"type":"Text","props":{"y":528,"x":435,"width":153,"var":"t_title","text":"青铜守卫","height":35,"fontSize":35,"font":"SimHei","color":"#eacd83","align":"center"}},{"type":"Button","props":{"y":1163,"x":273,"var":"btn_playAgain","stateNum":2,"skin":"game/btn_zaiwanyici.png"}},{"type":"Button","props":{"y":1032,"x":273,"var":"btn_shared","stateNum":2,"skin":"game/btn_xuanyaodefen.png"}},{"type":"Button","props":{"y":1292,"x":299,"width":216,"var":"btn_rank","labelSize":35,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","label":"查看全部排行","height":58}},{"type":"List","props":{"y":656,"x":108,"width":630,"visible":false,"var":"list_rank","height":322},"child":[{"type":"Box","props":{"y":0,"x":0,"width":628,"renderType":"render","height":108},"child":[{"type":"Image","props":{"y":2,"x":425,"skin":"game/xunzhang-01.png"}},{"type":"Text","props":{"y":24,"x":486,"text":"青铜守卫","name":"t_title","fontSize":30,"font":"SimHei","color":"#eacd83"}},{"type":"Image","props":{"y":68,"x":19,"skin":"game/img_line.png","name":"img_title"}},{"type":"Text","props":{"y":19,"x":309,"width":132,"text":"999999","name":"t_score","height":35,"fontSize":30,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":19,"x":102,"width":216,"text":"玩家名字七个字","name":"t_name","height":35,"fontSize":30,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":16,"x":57,"skin":"game/yuandi.png"}},{"type":"Text","props":{"y":22,"x":58,"width":39,"text":"1","name":"t_rank","height":30,"fontSize":30,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":16,"x":0,"skin":"game/yuandi.png","name":"img_icon"}}]}]}]}]};
		return GameOverUI;
	})(View);
var GameRankUI=(function(_super){
		function GameRankUI(){
			
		    this.gameoverPanel=null;
		    this.RankList=null;
		    this.playerItem=null;
		    this.listName=null;
		    this.close=null;

			GameRankUI.__super.call(this);
		}

		CLASS$(GameRankUI,'ui.GameRankUI',_super);
		var __proto__=GameRankUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameRankUI.uiView);

		}

		GameRankUI.uiView={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"width":814,"visible":true,"var":"gameoverPanel","height":1556,"centerY":0,"centerX":0},"child":[{"type":"Sprite","props":{"alpha":0.9},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":814,"lineWidth":1,"height":1556,"fillColor":"#050505"}}]},{"type":"Box","props":{"y":367,"x":104},"child":[{"type":"Image","props":{"y":12,"x":0,"width":618,"skin":"game/paohangbang-di.png","sizeGrid":"10,10,10,10","height":728},"child":[{"type":"List","props":{"y":89,"x":6,"width":610,"visible":false,"var":"RankList","spaceY":5,"selectEnable":false,"repeatY":6,"repeatX":1,"height":536},"child":[{"type":"Box","props":{"y":0,"x":0,"width":574,"var":"playerItem","renderType":"render","height":85},"child":[{"type":"Image","props":{"y":10,"x":10,"skin":"game/No.1.png","name":"rankIcon"}},{"type":"Image","props":{"y":10,"x":71,"skin":"game/No.1.png","name":"playerIcon"}},{"type":"Label","props":{"y":40,"x":36,"width":35,"text":"99","name":"rankIndex","height":36,"fontSize":30,"font":"SimHei","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":23,"x":135,"width":205,"text":"玩家名字七个字","name":"playerName","height":40,"fontSize":25,"font":"SimHei"}},{"type":"Label","props":{"y":25,"x":350,"width":116,"text":"9999999","name":"playerScore","height":30,"fontSize":25,"font":"SimHei","color":"#ff0000","align":"center"}},{"type":"Image","props":{"y":63,"skin":"game/img_line.png"}},{"type":"Label","props":{"y":26,"x":471,"width":116,"text":"青铜卫士","name":"playerTitle","height":30,"fontSize":25,"font":"SimHei","color":"#010101","align":"center"}}]}]},{"type":"Label","props":{"y":21,"var":"listName","text":"好友排行","fontSize":35,"font":"SimHei","color":"#ffffff","centerX":-7}},{"type":"Label","props":{"y":669,"x":306,"text":"每周一更新排名","fontSize":26,"font":"SimHei","color":"#070201","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":-2,"x":577,"var":"close","skin":"game/btn_guanbi.png"}}]}]}]};
		return GameRankUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.guildBox=null;
		    this.startBox=null;
		    this.btn_start=null;
		    this.btn_rank=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);

		}

		GameStartUI.uiView={"type":"View","props":{"width":720,"height":1280,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"width":814,"visible":false,"var":"guildBox","mouseEnabled":true,"height":1556,"centerY":0,"centerX":0,"cacheAs":"bitmap"},"child":[{"type":"Sprite","props":{"y":0,"x":0,"name":"s_mask","alpha":0.8},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":814,"lineWidth":1,"height":1556,"fillColor":"#050505"}}]},{"type":"Image","props":{"y":1044,"x":562,"skin":"game/jiantou.png"}},{"type":"Image","props":{"y":1039,"x":231,"skin":"game/jiantou.png","scaleX":-1}},{"type":"Text","props":{"y":1327,"x":300,"text":"点击任意位置开始","fontSize":30,"font":"SimHei","color":"#ffffff"}},{"type":"Text","props":{"y":573,"x":90,"text":"点击或滑动英雄来击退敌人，保护水晶不被破坏","fontSize":30,"font":"SimHei","color":"#ffffff"}}]},{"type":"Box","props":{"width":814,"var":"startBox","height":1556,"centerY":0,"centerX":0},"child":[{"type":"Sprite","props":{"alpha":0.9},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":814,"lineWidth":1,"height":1556,"fillColor":"#050505"}}]},{"type":"Image","props":{"y":404,"x":191,"skin":"game/logo.png"}},{"type":"Button","props":{"y":803,"x":257,"var":"btn_start","stateNum":1,"skin":"game/btn_kaishianniu.png"}},{"type":"Button","props":{"y":925,"x":344,"width":125,"var":"btn_rank","labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","label":"排行榜>>","height":38}}]}]};
		return GameStartUI;
	})(View);