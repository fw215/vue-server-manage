<template>
  <div>
    <article>
      <header class="content-header container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <h2>Hello World</h2>
          </div>
        </div>
      </header>

      <div class="content container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <p>{{msg1}}</p>
            <p>{{msg2}}</p>
            <p>{{msg3}}</p>
          </div>
          <div class="col-lg-12">
            <div class="info-box">
              <div class="box-body">
                <div class="table-responsive">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <td is="form-textarea" :value="msg1"></td>
                        <td is="form-textarea" :value="msg2"></td>
                        <td is="form-textarea" :value="msg3"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import FormTextarea from '@/components/Form/Textarea'

export default {
  name: 'HelloWorld',
  components: {
    'form-textarea': FormTextarea
  },
  data () {
    return {
      msg1: 'Welcome to Your Vue.js App 1',
      msg2: 'Welcome to Your Vue.js App 2',
      msg3: 'Welcome to Your Vue.js App 3'
    }
  }
}
</script>
