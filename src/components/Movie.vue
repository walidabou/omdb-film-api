<template>
  <v-container>
    <v-layout row wrap class="text-center">
      <v-flex xs6>
        <h2 class="mb-3">{{ singleMovie.Title }}</h2>
        <v-card>
            <v-img
            :src="singleMovie.Poster"
            aspect-ratio="1"
            ></v-img>
            <v-card-title primary-title>
                <div>
                    <h2>{{singleMovie.Title}}</h2>
                    <div>Year: {{singleMovie.Year}}</div>
                    <div>Type: {{singleMovie.Type}}</div>
                </div>
            </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="text-xs-center">
        <v-dialog
          v-model="dialog"
          width="500">
          <v-btn
            slot="activator"
            color="green"
            dark
            @click="dialog = true">
            View Ratings
          </v-btn>
          <v-card>
            <v-card-title
              class="headline grey lighten-2"
              primary-title
            >
              Ratings
            </v-card-title>
            <v-card-text>
              <table style="width:100%" border="1" >
                <tr>
                  <th>Source</th>
                  <th>Ratings</th>
                </tr>
                <tr v-for="(rating,index) in singleMovie.Ratings" :key="index">
                  <td align="center">{{singleMovie.Ratings[index].Source}}</td>
                  <td align="center">{{singleMovie.Ratings[index].Value}}</td>
                </tr>
              </table>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {

  data() {

    return {
      singleMovie: '',
      dialog: false
    }
  },

  mounted() {

    this.$axios.get('?apikey=fbfb8de5&i=' + this.$route.params.id).then(response => {
        this.singleMovie = response.data;
      })
      .catch(error => console.log(error))
  }
}
</script>
