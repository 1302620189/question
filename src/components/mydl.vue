<template>
    <dl>
        <dt @click="$router.push('/detail/'+cont.id)">
            <img :src="'../../static/1.jpg'" alt="">
           <div>
                <p>{{cont.nickname}}</p>
            <span>{{cont.address}}</span>
           </div>
        </dt>
        <dd>
            <p>{{cont.question}}</p>
            <span>{{cont.ctime}}</span>
        </dd>
        <span>{{cont.bankuai}}</span>
    </dl>
</template>
<script>
export default {
    props:{
        cont:Object
    },
     
}
</script>