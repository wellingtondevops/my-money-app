import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHearder from '../common/tab/tabHearder'
import TabHeader from '../common/tab/tabHearder'


class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro'/>
                <Content>
                   <Tabs>
                       <TabsHeader>
                           <TabHeader label='Listar' icon='bars' target='tabList'/>
                           <TabHeader label='Listar' icon='bars' target='tabList'/>

                       </TabsHeader>
                       <TabsContent>

                       </TabsContent>

                   </Tabs>
                </Content>
            </div>
        )
    }
}
export default BillingCycle