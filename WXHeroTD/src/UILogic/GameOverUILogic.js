/**
 * 主游戏界面
 */

var GameOverUILogic = (function (_super) {

    function GameOverUILogic() {
        GameOverUILogic.super(this);
    }
    Laya.class(GameOverUILogic, "GameOverUILogic", _super);
    _proto = GameOverUILogic.prototype;

    _proto.onInit = function () {
        this.width = Laya.stage.width;
        this.height = Laya.stage.height;

        // MusicManager.getInstance().playMusic("res/music/1.mp3");

        // this.moveBox.on(Laya.Event.MOUSE_DOWN,this,this._mouseDowm);

    }
    

    _proto.onDestroy = function () {
        // MusicManager.getInstance().stopMusic();
    }

    _proto.addScore = function(p_score){
        // Gamelog("-------gamescore="+SceneManager.getInstance().currentScene.gameScore)
        this.t_score.text = SceneManager.getInstance().currentScene.gameScore;
    }

    /**关闭游戏 */
    _proto.onCloseGame = function () {

    }

    return GameOverUILogic;
})(GameOverUI);