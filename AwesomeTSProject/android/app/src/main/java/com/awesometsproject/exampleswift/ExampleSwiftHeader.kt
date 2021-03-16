package com.awesometsproject.exampleswift
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import java.util.Collections.emptyList

class ExampleSwiftHeader : ReactPackage {
    
    override fun createNativeModules(reactContext: ReactApplicationContext) =
            listOf(
                    ExampleSwift(reactContext)
            )

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return emptyList()
    }
}