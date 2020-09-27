import {publicMessagesStarter} from './publicMessages/MessageBox.js'
import {renderTasksInitial} from "./tasks/TaskList.js"
import {renderArticlesInitial} from "./articles/ArticleList.js"
import {renderWeatherInitial} from './weather/Weather.js'

export const Nutshell = () => {
    // Render all your UI components here
    //like renderTasks, renderArticles, renderEvents, etc
    //import render for all components here
    renderWeatherInitial()
    publicMessagesStarter()
    renderTasksInitial()
    renderArticlesInitial()
}