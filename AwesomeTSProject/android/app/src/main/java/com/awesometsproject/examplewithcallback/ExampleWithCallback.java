package com.awesometsproject.examplewithcallback;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ExampleWithCallback extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    ExampleWithCallback(ReactApplicationContext context) {
        super(context);
        this.reactContext = context;
    }

    @Override
    public String getName() {
        return "ExampleWithCallback";
    }

    @ReactMethod
    public void exampleWithCallback(Callback callback) {
        Integer eventId =0;
        callback.invoke(eventId);
    }
}