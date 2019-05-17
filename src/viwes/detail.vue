<template>
      <div>
        <header>详情</header>
        <section>
          <dl>
        <dt>
            <img :src="'../../static/1.jpg'" alt="">
           <div>
            <p>{{val.nickname}}</p>
            <span>{{val.address}}</span>
           </div>
        </dt>
        <dd>
            <p>{{val.question}}</p>
            <span>{{val.ctime}}</span>
        </dd>
    </dl>
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
            val:{}
        }
    },
  created() {
      const id=this.$route.params.id;
      console.log(id);
      this.$http('/getdetail?id='+id).then(data=>{
         this.val=data.data;
      }) 
   },

}
</script>