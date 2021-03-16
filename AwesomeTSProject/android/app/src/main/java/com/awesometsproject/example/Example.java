package com.awesometsproject.example;
import android.util.Log;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class Example  extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    Example(ReactApplicationContext context) {
        super(context);
        this.reactContext = context;
    }

    @Override
    public String getName() {
        return "Example";
    }

   @ReactMethod
    public void exampleMethod(String stringParam) {
       Log.d("Example", "Java Native Module " + stringParam);
   }
}
