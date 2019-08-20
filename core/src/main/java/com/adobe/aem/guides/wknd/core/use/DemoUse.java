package com.adobe.aem.guides.wknd.core.use;

import com.adobe.cq.sightly.WCMUsePojo;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.components.Component;
import com.day.cq.wcm.api.designer.Design;

public class DemoUse extends WCMUsePojo {
    private String welcomeMsg;

    @Override
    public void activate() throws Exception {
        System.out.println("hello world\n");
        Component component = getComponent();
        String cellName = component.getCellName();
        Design design = getCurrentDesign();
        Page page = getCurrentPage();
        this.setWelcomeMsg("Hello AEM");
    }

    public String getWelcomeMsg() {
        return welcomeMsg;
    }

    public void setWelcomeMsg(String welcomeMsg) {
        this.welcomeMsg = welcomeMsg;
    }
}
