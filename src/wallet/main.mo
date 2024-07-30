import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor wallet {
  stable var currentValue: Float = 300;
  //currentValue := 300;
  Debug.print(debug_show(currentValue)); 

  stable var startTime = Time.now();
  startTime := Time.now();
  Debug.print(debug_show(startTime)); 
                        
  public func topUp(amount : Float){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdrawl(amount : Float){
    let tempValue: Float = currentValue - amount;

    if(tempValue >= 0){
      currentValue -= amount; 
      Debug.print(debug_show(currentValue));
    }
    else {
      Debug.print("Amount too large, current value less than zero");
    }
  };

  public query func checkBalance(): async Float {
    return currentValue;
  };

  // Ensure this method is present
  public query func wallet_api_version(): async Text {
    return "1.0.0"; // Update this to reflect your API version
  };
}
