<template>
    <div>
        <header>牛刀问答</header>
        <section>
         <div class="head">
             <p>
                 <input type="text" placeholder="请输入内容搜索">
                 <button>搜索</button>
             </p>
             <p>
                 <span @click="showLi">平台问题</span>
                 <span @click="newTime">最新帖</span>
                 <span>精华帖</span>
                 <span>高收藏</span>
             </p>
              <ul v-show="open" class="list">
                    <li v-for="(val,i) in bankuai" :key="i" @click="getType(val.bankuai)">{{val.bankuai}}</li>
              </ul>
         </div>
          <div class="con">
              <mydl v-for="(val,i) in data" :key='i'
              :cont='val'></mydl>
          </div>
        </section>
        <footer>
            <router-link to="/index">首页</router-link>
            <router-link to="/send">发帖</router-link> 
            <router-link to="/my">我的</router-link>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:[],
            lidata:[],
            bankuai:[],
            open:false
        }
    },
    created(){
        this.getdata();
    },
    methods: {
        getdata(){
            this.$http('/getdata').then(data=>{
               this.data=data.data; 
               this.data.forEach(item=>{
                   item.timenum=new Date(item.ctime)*1;
                   if(this.bankuai.findIndex(val=>val.bankuai===item.bankuai)===-1){
                       this.bankuai.push({
                           id:item.id,
                           bankuai:item.bankuai
                       })
                   }
               })
            })
        },
        showLi(){
            this.open=!this.open;
        },
        getType(type){
            this.$http('/getType?type='+type).then(data=>{
               this.data=data.data;
                this.data.forEach(item=>{
                   item.timenum=new Date(item.ctime)*1;
               })
               this.open=false;
            })
        },
        newTime(){
            console.log(1);
             this.data=this.data.sort((a,b)=>{
                 return b.timenum-a.timenum;
             })
        }
    },
}
</script>