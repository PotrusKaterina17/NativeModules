//
//  ExampleSwiftBridge.m
#import <Foundation/Foundation.h>
#import "ExampleSwiftBridgeHeader.h"
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ExampleSwift, NSObject)
RCT_EXTERN_METHOD(increment)

@end
