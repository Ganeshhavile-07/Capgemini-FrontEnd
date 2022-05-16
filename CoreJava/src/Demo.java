import java.io.IOException;
import java.util.Arrays;



public class Demo {
  public static void main(String[] args) {
	if(Move.getSpeed()>10) {
		System.out.println("Run");
	}else {
		System.out.println("walk");
	}
}
  interface Move{
		public static int getSpeed() {
			return 10;
		}public default String toString() {
			 return "move";
		}
  }
}
 


