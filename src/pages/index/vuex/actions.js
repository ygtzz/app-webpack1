//index-nav
export const get_index_nav = ({ commit }) => {
    let index_nav = {}
    commit('SET_MENU', index_nav)
}
export const set_menu_active = ({ commit }, _index) => {
    commit('SET_MENU_ACTIVE', _index)
}
export const set_chat_count = ({ commit }, count) => {
    commit('SET_CHAT_COUNT', count)
}

//chat
export const set_news_state = ({ commit }, index, val, fn) => {
    commit('SET_NEWS_STATE', index, val)
    !!fn && fn()
}
export const delete_news = ({ commit }, index, fn) => {
    commit('DELETE_NEWS', index)
    !!fn && fn()
}
export const get_menu_wechat_list = ({ commit }, fn) => {
    let list = {}
    commit('SET_MENU_WECHAT_LIST', list)
    !!fn && fn()
}
export const set_chat = ({ commit }, model) => {
    commit('CHAT', model)
}

//contact
export const get_person_info = ({ commit }, id, fn) => {
    let info = {}
    commit('PERSON_INFO', info)
    return Promise.resolve();
}
export const get_friends_list = ({ commit }, id) => {
    let friends = {}
    commit('CONTACT_FRIENDS', friends)
}

//find
export const set_iframe_url = ({ commit }, urlObj) => {
    commit('SET_IFRAME_URL', urlObj)
    return Promise.resolve();
}



//优雅结构,可读性略差
// export const deleteTodo = makeAction('DELETE_TODO')
// export const toggleTodo = makeAction('TOGGLE_TODO')
// export const editTodo = makeAction('EDIT_TODO')
// export const toggleAll = makeAction('TOGGLE_ALL')
// export const clearCompleted = makeAction('CLEAR_COMPLETED')

// function makeAction (type) {
//   return ({ commit }, ...args) => commit(type, ...args)
// }
