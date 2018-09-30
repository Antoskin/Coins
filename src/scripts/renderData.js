import $ from 'jquery'

const renderData = (d, type) => {

        const skelet = `<li class="li prec cards__item_data--hour">
                            <p>Hour change</p>
                            <span class="${ d.hour.toString().split('').slice(0,1).join() == '-' ? 'neg' : 'pos' }">
                                ${d.hour}${type}
                            </span>
                        </li>
                        <li class="li prec cards__item_data--day">
                            <p>Day change</p>
                            <span class="${ d.day.toString().split('').slice(0,1).join() == '-' ? 'neg' : 'pos' }">
                                ${d.day}${type}
                            </span>
                        </li>
                        <li  class="li prec cards__item_data--week">
                            <p>Week change</p>
                            <span class="${ d.week.toString().split('').slice(0,1).join() == '-' ? 'neg' : 'pos' }">
                                ${d.week}${type}
                            </span>
                        </li>
                        <li  class="li prec cards__item_data--month">
                            <p>Month change</p>
                            <span class="${ d.month.toString().split('').slice(0,1).join() == '-' ? 'neg' : 'pos' }">
                                ${d.month}${type}
                            </span>
                        </li>`

        
    document.querySelector(`#target`).innerHTML = skelet;
}


export default renderData
