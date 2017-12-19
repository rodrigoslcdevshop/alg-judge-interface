<template>
  <div class="dashboard">

    <vuestic-widget class="no-padding no-v-padding">
      <vuestic-tabs :names="['Data Visualization', 'Users & Members', 'Setup Profile', 'Features']" ref="tabs">
        <div slot="Data Visualization">
          <data-visualisation-tab></data-visualisation-tab>
        </div>
        <div slot="Users & Members">
          <users-members-tab></users-members-tab>
        </div>
        <div slot="Setup Profile">
          <setup-profile-tab></setup-profile-tab>
        </div>
        <div slot="Features">
          <features-tab></features-tab>
        </div>
      </vuestic-tabs>
    </vuestic-widget>
  </div>
</template>

<script>
  import VuesticWidget from '../vuestic-components/vuestic-widget/VuesticWidget'
  import VuesticAlert from '../vuestic-components/vuestic-alert/VuesticAlert'
  import DashboardInfoWidgets from './DashboardInfoWidgets'
  import VuesticTabs from '../vuestic-components/vuestic-tabs/VuesticTabs.vue'
  import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
  import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
  import FeaturesTab from './features-tab/FeaturesTab.vue'
  import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'
  import DashboardBottomWidgets from './DashboardBottomWidgets.vue'

  export default {
    name: 'teste',
    components: {
      DataVisualisationTab,
      VuesticWidget,
      VuesticAlert,
      DashboardInfoWidgets,
      VuesticTabs,
      UsersMembersTab,
      SetupProfileTab,
      FeaturesTab,
      DashboardBottomWidgets
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/_variables.scss";
</style>
