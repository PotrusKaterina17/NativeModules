package com.awesometsproject.exampleswift

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ExampleSwift internal constructor(
        reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "ExampleSwift"

    private var count = 0

    @ReactMethod
    fun increment() {
        count++
        Log.d("Example Kotlin", count.toString())
    }
}