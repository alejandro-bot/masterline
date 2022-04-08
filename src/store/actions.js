import { dominio } from "../dominio.js";

const actions = {
  retrieveToken(context, credentials) {
    return new Promise((resolve, reject) => {
      axios.post(dominio.url + '/api/login', {
        email: credentials.email,
        password: credentials.password
      }).then(response => {
        if (response.data.ok == true) {
          console.log(response.data.data)
          const token = response.data.data.token;
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
          localStorage.setItem('access_token', token);
          localStorage.setItem('user', JSON.stringify(response.data.showUserAuth[0]));
          context.commit('retrieveToken', token);
        }
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  },
  destroyToken(context) {
    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios.post(dominio.url + '/api/logout').then(response => {
          localStorage.removeItem('access_token');
          localStorage.removeItem('user');
          context.commit('destroyToken');
          resolve(response);
        }).catch(error => {
          localStorage.removeItem('access_token');
          localStorage.removeItem('user');
          context.commit('destroyToken');
          reject(error);
        });
      });
    }
  },


  // /////////////////////////////////////////////
  // COMPONENTS
  // /////////////////////////////////////////////

  // Vertical NavMenu
  updateVerticalNavMenuWidth({
    commit
  }, width) {
    commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width)
  },

  // VxAutoSuggest
  updateStarredPage({
    commit
  }, payload) {
    commit('UPDATE_STARRED_PAGE', payload)
  },

  // The Navbar
  arrangeStarredPagesLimited({
    commit
  }, list) {
    commit('ARRANGE_STARRED_PAGES_LIMITED', list)
  },
  arrangeStarredPagesMore({
    commit
  }, list) {
    commit('ARRANGE_STARRED_PAGES_MORE', list)
  },

  // /////////////////////////////////////////////
  // UI
  // /////////////////////////////////////////////

  toggleContentOverlay({
    commit
  }) {
    commit('TOGGLE_CONTENT_OVERLAY')
  },
  updateTheme({
    commit
  }, val) {
    commit('UPDATE_THEME', val)
  },

  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////

  updateUserInfo({
    commit
  }, payload) {
    commit('UPDATE_USER_INFO', payload)
  },
}

export default actions
