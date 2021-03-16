//Example.m
#import "ExampleHeader.h"
#import <React/RCTLog.h>

@implementation Example

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(exampleMethod:(NSString *)name){
  RCTLogInfo(@"The string '%@' comes from JavaScript! ", name);
}

@end
