<template>
<form>
  <q-page class="flex flex-center">
    <div class="q-gutter-y-md column">

      <div class="col">
          Warning! This tool is an early prototype and suffers from various issues:
        <ul>
        <li>Poor rounding, due to use of the default JavaScript maths library </li>
        <li>We only account for Pt100 sensors, where the resistance at 0&#176;C is 100&#8486;</li>
        </ul>
      </div>

      <div class="col">
        <q-input v-model.number="input" type="number" step=".0001" label="Resistance (&#8486;)" @update:model-value="runMaths()" >
        </q-input>


        <q-field filled v-model="input" label="Temperature (&#176;C)" stack-label>
            <template v-slot:control><div>{{temperature}}</div></template>
        </q-field>
      </div>

    </div>
  </q-page>
</form>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';
import { iec60751math }  from '../iec60751.js'

export default defineComponent({
    name: 'iec60751',
    data(){
        const input = ref('')
        const temperature = ref('')
        return{
            input,
            temperature
        };
    },

    methods: {
        runMaths(){
            var inVar = this.input
            this.temperature = iec60751math(inVar).toFixed(2)
        }
    },
    
    }
)



</script>
