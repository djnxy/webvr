/**
 * Created by zongwen1 on 16-8-31.
 */
function eventTester(e){
    video.addEventListener(e,function(){
        if (e == 'error') {
            console.log(video.error,video.error.code);
        }
        console.log((new Date()).getTime(),e)
    },false);
}

function print_video_event() {
    eventTester("loadstart"); //客户端开始请求数据
    eventTester("progress"); //客户端正在请求数据
    eventTester("suspend"); //延迟下载
    eventTester("abort"); //客户端主动终止下载（不是因为错误引起）
    eventTester("loadstart"); //客户端开始请求数据
    eventTester("progress"); //客户端正在请求数据
    eventTester("suspend"); //延迟下载
    eventTester("abort"); //客户端主动终止下载（不是因为错误引起），
    eventTester("error"); //请求数据时遇到错误
    eventTester("stalled"); //网速失速
    eventTester("play"); //play()和autoplay开始播放时触发
    eventTester("pause"); //pause()触发
    eventTester("loadedmetadata"); //成功获取资源长度
    eventTester("loadeddata"); //
    eventTester("waiting"); //等待数据，并非错误
    eventTester("playing"); //开始回放
    eventTester("canplay"); //可以播放，但中途可能因为加载而暂停
    eventTester("canplaythrough"); //可以播放，歌曲全部加载完毕
    eventTester("seeking"); //寻找中
    eventTester("seeked"); //寻找完毕
    eventTester("timeupdate"); //播放时间改变
    eventTester("ended"); //播放结束
    eventTester("ratechange"); //播放速率改变
    eventTester("durationchange"); //资源长度改变
    eventTester("volumechange"); //音量改变
}
