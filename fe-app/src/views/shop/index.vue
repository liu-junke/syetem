<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="店铺名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="详细地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="店铺简介">
            <span>{{ props.row.info }}</span>
          </el-form-item>
          <el-form-item label="店铺标语">
            <span>{{ props.row.slogan }}</span>
          </el-form-item>
          <el-form-item label="营业时间">
            <span>早： {{ props.row.startTime }}</span>
            <span>晚： {{ props.row.endTime }}</span>
          </el-form-item>
          <el-form-item label="店铺分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="商品特点">
             <FeatureItem :text = "props.row.feature"/>
          </el-form-item>
          <el-form-item label="logo">
            <img :src="props.row.logoUrl" alt="" class="img-box">
          </el-form-item>
          <el-form-item label="营业许可证">
            <img :src="props.row.manageUrl" alt="" class="img-box">
          </el-form-item>
          <el-form-item label="餐饮许可证">
            <img :src="props.row.diningUrl" alt="" class="img-box">
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="商品 ID" prop="id"></el-table-column>
    <el-table-column label="商品名称" prop="name"></el-table-column>
    <el-table-column label="描述" prop="desc"></el-table-column>
    <el-table-column align="right">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit( scope.row)">Edit</el-button>
        <el-button size="mini" type="danger" @click="del( scope.row._id )">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import FeatureItem from './Feature'
import { mapActions,mapState } from 'vuex'
export default {
   data() {
    return {
      tableData: []
    };
  },
  components:{
    FeatureItem
  },
  methods:{
    ...mapActions(['query','del']),
    handleEdit( item ){
      this.$router.push({
        name:'edit',
        query:item
      })
    }
  },
  computed:{
    ...mapState({
      data:state=>state.shop.data
    })
  },
  mounted(){
    this.query()
  }
}
</script>



<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.img-box{
  width: 200px;
  height: 200px
}
</style>
