//
//  ExampleWithCallback.m

#import <Foundation/Foundation.h>
#import "ExampleWithCallbackHeader.h"
#import <React/RCTLog.h>

@implementation ExampleWithCallback

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(exampleWithCallback:(RCTResponseSenderBlock)myCallback)
{
  NSInteger eventId = 0;
  myCallback(@[@(eventId)]);

 RCTLogInfo(@"Pretending to create an event at a native code");
}

@end
