<template>
    <div class="shopadd-box">
  <el-form 
  :model="ruleForm"
  :rules="rules"
  ref="ruleForm"
  label-width="120px"
  class="demo-ruleForm upForm"
  style = "max-width: 700px;"
  enctype="multipart/form-data"
  >
  <el-form-item label="店铺信用码">
    <el-input v-model = "ruleForm.id" name = "id"></el-input>
  </el-form-item>
  <el-form-item label="店铺名称" prop="name">
    <el-input v-model="ruleForm.name" name = "name"></el-input>
  </el-form-item>
  <el-form-item label="详细地址" prop="address">
    <el-input v-model="ruleForm.address" name = "address"></el-input>
  </el-form-item>
  <el-form-item label="联系电话" prop="phone">
    <el-input v-model="ruleForm.phone" name = "phone"></el-input>
  </el-form-item>
  <el-form-item label="店铺简介" prop="info">
    <el-input v-model="ruleForm.info" name = "info"></el-input>
  </el-form-item>
  <el-form-item label="店铺标语" prop="slogan">
    <el-input v-model="ruleForm.slogan" name = "slogan"></el-input>
  </el-form-item>
  <el-form-item label="店铺分类" >
    <el-cascader v-model="value" :options="options" name = "caregory"></el-cascader>
  </el-form-item>
 <el-form-item label="店铺特点" >
   <ul class="feature-box">
        <li v-for="item in feature" :key="item.id">
          <span style = "margin-right: 4px;" :class="{ active: item.f }">{{ item.text }}</span>
          <el-switch v-model="item.f" active-color="#20A0FF" inactive-color="#bfcbd9"></el-switch>
        </li>
   </ul>
 </el-form-item>
  <el-form-item label="配送费" required>
    <!-- @change="handleChange1" -->
    <el-input-number name = "delivery" v-model="delivery"  :min="1" :max="100" label="描述文字" ></el-input-number>
  </el-form-item>    
  <!-- @change="handleChange2" -->
  <el-form-item label="起送价" required>
    <el-input-number name = "price" v-model="price"  :min="1" :max="1000" label="描述文字" ></el-input-number>
  </el-form-item>
  <el-form-item label="营业时间" >
     <el-time-select
     name = "startTime"
    placeholder="起始时间"
    v-model="startTime"
    :picker-options="{
      start: '05:30',
      step: '00:15',
      end: '23:30'
    }">
  </el-time-select>
  <el-time-select
  name = "endTime"
    placeholder="结束时间"
    v-model="endTime"
    :picker-options="{
      start: '05:30',
      step: '00:15',
      end: '23:30',
      minTime: startTime
    }">
  </el-time-select>
  </el-form-item>
  <el-form-item label="上传店铺logo" prop="type">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="logoSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="logoUrl" :src="logoUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      </el-form-item>
      <el-form-item label="上传营业执照" prop="type">
       <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="manageSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="manageUrl" :src="manageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传餐饮许可证" prop="type">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="diningSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="diningUrl" :src="diningUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm()">立即创建</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    data() {
      return {
          value: [],
          delivery:1,
          price:10,
          startTime: '',
          endTime: '',
          logoUrl: '',
          manageUrl: '',
          diningUrl: '',
          imageUrl: '',
          ruleForm: {
           id: "",
           name: "",
           address: "",
           phone: "",
           info: "",
           slogan: "",
           region: "",
           date1: "",
           date2: "",
           delivery: false,
           type: [],
           resource: "",
           desc: ""
        },
        rules: {
          name: [
            { required: true, message: '请输入店铺名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入详细地址', trigger: 'blur' },
            { min: 3, max: 30, message: '长度在 3 到 30 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入联系电话', trigger: 'blur' },
            { min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur' }
          ],
          info: [
            { required: true, message: '请输入店铺简介', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          slogan: [
            { required: true, message: '请输入店铺标语', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        options: [{
          value: 'liaoli',
          label: '异国料理',
          children: [{
            value: 'rihan',
            label: '日韩料理', 
          }, {
            value: 'xican',
            label: '西餐',
          },
          {
            value: 'pisa',
            label: '披萨意面',
          },
          {
            value: 'dongnanya',
            label: '东南亚菜',
          },
          ]
        }, {
          value: 'kuaican',
          label: '快餐便当',
          children: [{
            value: 'basic',
            label: '简餐',
          }, {
            value: 'form',
            label: '盖浇饭',
          }, {
            value: 'data',
            label: '米粉面馆',
          }, {
            value: 'notice',
            label: '包子粥店',
          }, {
            value: 'navigation',
            label: '香锅砂锅',
          }, {
            value: 'others',
            label: '麻辣烫',
          }]
        }, {
          value: 'xiaochi',
          label: '小吃夜宵',
          children: [{
            value: 'axure',
            label: '小龙虾'
          }, {
            value: 'sketch',
            label: '地方小吃'
          }, {
            value: 'jiaohu',
            label: '烧烤'
          }]
        },
        {
          value: 'guoshu',
          label: '果蔬生鲜',
          children: [{
            value: 'shuiguo',
            label: '水果'
          }, {
            value: 'shengxian',
            label: '生鲜'
          }, {
            value: 'shucai',
            label: '蔬菜'
          }]
        },
        {
          value: 'tese',
          label: '特色菜系',
          children: [{
            value: 'chuanxiang',
            label: '川湘菜'
          }, {
            value: 'qita',
            label: '其他菜系'
          }, {
            value: 'jiangzhe',
            label: '江浙菜'
          }]
        },
        {
          value: 'shangpin',
          label: '商品超市',
          children: [{
            value: 'chaoshi',
            label: '超市'
          }, {
            value: 'bianlidian',
            label: '便利店'
          }, {
            value: 'mingjiufang',
            label: '名酒坊'
          }]
        }
        ],
      
      feature: [
        {
          id: 1,
          text: "品牌保证",
          f: true
        },
        {
          id: 2,
          text: "蜂鸟专送",
          f: true
        },
        {
          id: 3,
          text: "新开店铺",
          f: true
        },
        {
          id: 4,
          text: "外卖保",
          f: true
        },
        {
          id: 5,
          text: "准时达",
          f: true
        },
        {
          id: 6,
          text: "开发票",
          f: true
        }
      ]
      }
    },
    methods: {
      ...mapActions(['add']),
      submitForm() {
      let form = new FormData($('.upForm')[0])
      form.append('category',this.value )
      // form.append('a',1 )
      var featureFlag = []
      this.feature.map( (item,index ) => {
        if ( item.f ) {
          featureFlag.push( item.text )
          return 
        }
      })
      form.append('feature', JSON.stringify(featureFlag))
      form.append('logoUrl',this.logoUrl)
      form.append('manageUrl',this.manageUrl)
      form.append('diningUrl',this.diningUrl)
      var _this = this 
     	$.ajax({
		  url: 'http://localhost:3000/shop',
		  type: 'POST',
		  cache: false, //不必须
		  data: form,
		  processData: false,//必须
		  contentType: false,//必须
		  success: function(data) {
		 const result = JSON.parse( data )
          console.log("result", result)
          switch ( result.status ) {
            case 0:
              _this.$message({
                showClose: true,
                message: '店铺已经存在，请您确认过之后再次添加',
                type: 'warning'
              });
              break;
            case 2:
              _this.$message({
                showClose: true,
                message: '添加成功，即将自动条状列表页面',
                type: 'success',
                duration: 1000
              });
              setTimeout(() => {
                 _this.$message.close()
                 _this.$router.push('/shop')
              },1000)
              break;
            default:
              break;
          }
		}
	})
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    logoSuccess (res, file) {
       
        this.logoUrl = URL.createObjectURL(file.raw);
    },
     manageSuccess (res, file) {
       
        this.manageUrl = URL.createObjectURL(file.raw);
    },
     diningSuccess (res, file) {
       
        this.diningUrl = URL.createObjectURL(file.raw);
    },
      beforeAvatarUpload(file) {
      }
    },
    mounted(){
      console.log('this',this)
    }
} 
</script>

<style lang="stylus">
.feature-box
  display flex
  flex-wrap wrap
  max-width 350px
  li
    margin-right 10px
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.feature-box {
  li {
    span {
      &.active {
        color: green!important;
        font-weight: bold;
      }
    }
  }
}
  
</style>