package com.awesometsproject.syncexample;
import android.os.Build;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class SyncExample extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    SyncExample(ReactApplicationContext context) {
        super(context);
        this.reactContext = context;
    }

    @Override
    public String getName() {
        return "SyncExample";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String syncExampleMethod() {
        return Build.DEVICE;
    }
}