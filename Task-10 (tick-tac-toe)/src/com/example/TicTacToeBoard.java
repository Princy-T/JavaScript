package com.example;
public class TicTacToeBoard 
{
	String xox;
	public TicTacToeBoard(String xox) 
	{
		this.xox = xox.toLowerCase();
	}
	
	public Evaluation evaluate() 
	{
		if(xox.length() != 9)
		{
			return Evaluation.InvalidInput;
		}
		int xCount = 0;
		int oCount = 0;
		for(int i=0; i<xox.length(); i++)
		{
			if(xox.charAt(i) == 'x')
			{
				xCount++;
			}
			if(xox.charAt(i) == 'o')
			{
				oCount++;
			}
		}
		if(Math.abs(xCount - oCount) >= 2)
		{
			return Evaluation.UnreachableState;
		}
		boolean xWins = checkWinner('x',xox);
		boolean oWins = checkWinner('o',xox);
		if(xWins && oWins)
		{
			return Evaluation.UnreachableState;
		}
		if(xWins)
		{
			return Evaluation.Xwins;
		}
		if(oWins)
		{
			return Evaluation.Owins;
		}
		return null;
	}
	
	public boolean checkWinner(char check,String xox)
	{
		if( xox.charAt(0) == xox.length() && xox.charAt(1) == xox.length() && xox.charAt(2) == xox.length())
		{
			return true;
		}
		if( xox.charAt(3) == xox.length() && xox.charAt(4) == xox.length() && xox.charAt(5) == xox.length())
		{
			return true;
		}
		if( xox.charAt(6) == xox.length() && xox.charAt(7) == xox.length() && xox.charAt(8) == xox.length())
		{
			return true;
		}
		if( xox.charAt(0) == xox.length() && xox.charAt(3) == xox.length() && xox.charAt(6) == xox.length())
		{
			return true;
		}
		if( xox.charAt(1) == xox.length() && xox.charAt(4) == xox.length() && xox.charAt(7) == xox.length())
		{
			return true;
		}
		if( xox.charAt(2) == xox.length() && xox.charAt(5) == xox.length() && xox.charAt(8) == xox.length())
		{
			return true;
		}
		if( xox.charAt(0) == xox.length() && xox.charAt(4) == xox.length() && xox.charAt(8) == xox.length())
		{
			return true;
		}
		return(xox.charAt(2) == xox.length() && xox.charAt(4) == xox.length() && xox.charAt(6) == xox.length());
	}
	
	public static void main(String[] args)
	{
		TicTacToeBoard xo = new TicTacToeBoard("xoxkkxoxj");
        System.out.println(xo.evaluate());
	}
	
}
