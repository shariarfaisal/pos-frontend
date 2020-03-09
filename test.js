
const access = {
            "employeeType": "rwud",
            "employee": "----",
            "category": "----",
            "product": "----",
            "item": "----",
            "subItem": "----",
            "branch": "rw--",
            "import": "rwud",
            "refund": "rwud",
            "export": "rwud",
            "exportReturn": "rwud",
            "vendor": "rwud",
            "sale": "rwud",
            "customer": "rwud",
            "brand": "rwud",
            "order": "rwud",
            "review": "rwud"
        }


        const routes = [
          {name: ['home','r'],path: '/'},
          {name: ['employee','r'],path: '/employee'},
          {name: ['employeeType','r'],path: '/employee/type'},
          {name: ['employeeType','r'],path: '/employee/type/:typeId'},
          {name: ['employee','w'],path:'/employee/create'},
          {name: ['category','r'],path:'/category'},
          {name: ['product','r'],path:'/category/:catId'},
          {name: ['item','r'],path:'/category/:catId/:proId'},
          {name: ['subItem','r'],path:'/category/:catId/:proId/:itemId'},
          {name: ['vendor','r'],path:'/vendor'},
          {name: ['brand','r'],path:'/brand'},
          {name: ['branch','r'],path:'/branch'},
          {name: ['profile','r'],path:'/profile'},
          {name: ['import','r'],path:'/import'},
          {name: ['import','r'],path:'/import/:importId'}
        ]


        const checkAccess = (access,routes) => {
          return routes.filter(i => {
              const x = access[i.name[0].toLowerCase()]
              return x ? x.includes(i.name[1]) ? true : false : true
              // if(x){
              //   if(x.includes(i.name[1])) return true
              //   else return false
              // }
              // return true
            })
        }

console.log(checkAccess(access,routes));
